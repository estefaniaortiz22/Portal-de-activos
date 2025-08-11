package com.grupofi.portal.models;

import java.io.Serializable;

/**
 * Modelo para representar un activo tecnológico.
 */
public class Asset implements Serializable {
    
    private int id;
    private String serial;
    private String name;
    private String category;
    private String plate;
    private String workStation;
    private String brand;
    private String model;
    private String status;
    
    public Asset() {
    }
    
    public Asset(int id, String serial, String name, String category, String plate, String workStation, String brand, String model, String status) {
        this.id = id;
        this.serial = serial;
        this.name = name;
        this.category = category;
        this.plate = plate;
        this.workStation = workStation;
        this.brand = brand;
        this.model = model;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSerial() {
        return serial;
    }

    public void setSerial(String serial) {
        this.serial = serial;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public String getWorkStation() {
        return workStation;
    }

    public void setWorkStation(String workStation) {
        this.workStation = workStation;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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
        final Asset other = (Asset) obj;
        return this.id == other.id;
    }
    
    @Override
    public int hashCode() {
        return id;
    }
}