package com.weatherApp.weather.user;


import com.weatherApp.weather.exception.UserAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ldap.core.AttributesMapper;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.ldap.filter.AndFilter;
import org.springframework.ldap.filter.EqualsFilter;
import org.springframework.stereotype.Service;

import org.springframework.ldap.support.LdapNameBuilder;


import javax.naming.Name;
import javax.naming.directory.BasicAttribute;
import javax.naming.directory.BasicAttributes;
import javax.naming.directory.DirContext;
import javax.naming.directory.ModificationItem;

import java.util.List;
@Service
public class UserService {

    @Autowired
    private LdapTemplate ldapTemplate;

    public UserDTO authenticate(String emailid, String rawPassword) {
        AndFilter filter = new AndFilter();
        filter.and(new EqualsFilter("objectClass", "inetOrgPerson"));
        filter.and(new EqualsFilter("mail", emailid));

        //String baseDn = "ou=ProjectTeam3,dc=inspiritvision,dc=com";


        boolean isAuthenticated = ldapTemplate.authenticate("", filter.encode(), rawPassword);
        if (!isAuthenticated) {
            return null;
        }

        List<UserDTO> result = ldapTemplate.search(
                "",
                filter.encode(),
                (AttributesMapper<UserDTO>) attrs -> {
                    UserDTO user = new UserDTO();
                    user.setEmailid((String) attrs.get("mail").get());
                    user.setName((String) attrs.get("cn").get());


                    user.setPassword("**********");

                    return user;
                }
        );

        return result.isEmpty() ? null : result.get(0);
    }

    //    public UserDTO addUser(UserDTO userDTO) {
//        String fullName = userDTO.getName().trim();
//        String[] nameParts = fullName.split("\\s+");
//        String lastName = nameParts.length > 1 ? nameParts[1] : "";
//        String uid = userDTO.getEmailid();
//
//        // 🛡️ Check if user already exists
//        boolean exists = !ldapTemplate.search(
//                "ou=ProjectTeam3,dc=inspiritvision,dc=com",
//                "(uid=" + uid + ")",
//                (AttributesMapper<String>) attrs -> (String) attrs.get("uid").get()
//        ).isEmpty();
//
//        if (exists) {
//            throw new RuntimeException("User with UID '" + uid + "' already exists in LDAP.");
//        }
//
//        // Build DN and attributes
//        Name dn = LdapNameBuilder.newInstance()
//                .add("ou", "ProjectTeam3")
//                .add("uid", uid)
//                .build();
//
//        BasicAttributes attrs = new BasicAttributes();
//        BasicAttribute oc = new BasicAttribute("objectClass");
//        oc.add("inetOrgPerson");
//
//        attrs.put(oc);
//        attrs.put("cn", fullName);
//        attrs.put("sn", lastName);
//        attrs.put("uid", uid);
//        attrs.put("mail", uid);
//        attrs.put("userPassword", userDTO.getPassword());
//
//        ldapTemplate.bind(dn, null, attrs);
//
//        return userDTO;
//    }
// Check if a user exists by UID
    public boolean userExists(String uid) {
        List<?> results = ldapTemplate.search(
                "",
                "(uid=" + uid + ")",
                (AttributesMapper<Object>) attrs -> attrs.get("uid").get()
        );
        return !results.isEmpty();
    }

    // Add user with duplicate check
    public UserDTO addUser(UserDTO userDTO) {
        String fullName = userDTO.getName().trim();
        String[] nameParts = fullName.split("\\s+");
        String lastName = nameParts.length > 1 ? nameParts[1] : "";
        String uid = userDTO.getEmailid();

        if (userExists(uid)) {
            throw new UserAlreadyExistsException("User with UID '" + uid + "' already exists.");
        }

        Name dn = LdapNameBuilder.newInstance()
                .add("ou", "ProjectTeam3")
                .add("uid", uid)
                .build();

        BasicAttributes attrs = new BasicAttributes();
        BasicAttribute oc = new BasicAttribute("objectClass");
        oc.add("inetOrgPerson");

        attrs.put(oc);
        attrs.put("cn", fullName);
        attrs.put("sn", lastName);
        attrs.put("uid", uid);
        attrs.put("mail", uid);
        attrs.put("userPassword", userDTO.getPassword());

        ldapTemplate.bind(dn, null, attrs);

        return userDTO;
    }

    public void updatePassword(String uid, String newPassword) {
        Name dn = LdapNameBuilder.newInstance()
                .add("ou", "ProjectTeam3")
                .add("uid", uid)
                .build();

        ModificationItem[] mods = new ModificationItem[1];
        mods[0] = new ModificationItem(DirContext.REPLACE_ATTRIBUTE,
                new BasicAttribute("userPassword", newPassword));

        ldapTemplate.modifyAttributes(dn, mods);
    }
    public boolean deleteUserIfExists(String uid) {
        if (userExists(uid)) {
            Name dn = LdapNameBuilder.newInstance()
                    .add("ou", "ProjectTeam3")
                    .add("uid", uid)
                    .build();

            ldapTemplate.unbind(dn);
            return true;
        }
        return false;
    }

}










