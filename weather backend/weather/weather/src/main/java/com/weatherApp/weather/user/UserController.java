package com.weatherApp.weather.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    UserService userService;


    @PostMapping("api/user")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        System.out.println("inside method");
        String emailid = credentials.get("emailid");
        String password = credentials.get("password");

        UserDTO user = userService.authenticate(emailid, password);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password.");
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody UserDTO userDTO) {
        try {
            UserDTO saved = userService.addUser(userDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(saved);
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    Map.of("error", ex.getMessage())
            );
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    Map.of("error", "Something went wrong: " + ex.getMessage())
            );
        }
    }

    @PutMapping("/{uid}/password")
    public ResponseEntity<String> updatePassword(
            @PathVariable String uid,
            @RequestBody PasswordRequest request) {

        String newPassword = request.getPassword();

        System.out.println("Raw password: '" + newPassword + "'");

        if (newPassword == null || newPassword.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("New password must not be empty.");
        }

        try {
            userService.updatePassword(uid, newPassword);
            return ResponseEntity.ok("Password updated successfully for UID: " + uid);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to update password: " + e.getMessage());
        }
    }



    @DeleteMapping("/{uid}")
    public ResponseEntity<String> deleteUser(@PathVariable String uid) {
        boolean deleted = userService.deleteUserIfExists(uid);
        if (deleted) {
            return ResponseEntity.ok("User with UID '" + uid + "' deleted successfully.");
        } else {
            return ResponseEntity.status(404).body("User with UID '" + uid + "' not found.");
        }
    }


}