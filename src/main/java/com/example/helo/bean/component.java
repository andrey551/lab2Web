package com.example.helo.bean;

import java.io.Serializable;

public class component implements Serializable {
    private String x;
    private String y;
    private String r;
    private String result;

    public component(String x, String y, String r, String result) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
    }


    public String getGetX() {
        return String.valueOf(this.x);
    }

    public String getGetY() {
        return String.valueOf(this.y);
    }

    public String getGetR() {
        return String.valueOf(this.r);
    }

    public String getGetRes() {
        return this.result;
    }
}
