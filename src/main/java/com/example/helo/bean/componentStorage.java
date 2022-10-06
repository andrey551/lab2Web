package com.example.helo.bean;

import java.util.ArrayList;

public class componentStorage {
    private ArrayList<component> storage;

    public componentStorage() {
        this.storage = new ArrayList<>();
    }

    public componentStorage(ArrayList<component> storage) {
        this.storage = storage;
    }

    public void addComponent(component comp) {
        storage.add(comp);
    }

    public ArrayList<component> getStorage() {
        return this.storage;
    }

    public int getSize() {
        return storage.size();
    }
}
