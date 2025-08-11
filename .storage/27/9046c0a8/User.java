package com.grupofi.portal.models;

import java.io.Serializable;

/**
 * Modelo para representar un usuario en el sistema.
 */
public class User implements Serializable {
    
    private String username;
    private String password;
    
    public User() {
    }
    
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final User other = (User) obj;
        return this.username.equals(other.username);
    }
    
    @Override
    public int hashCode() {
        return username.hashCode();
    }
}