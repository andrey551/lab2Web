package com.example.helo.servlet;

import com.example.helo.bean.component;
import com.example.helo.bean.componentStorage;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.util.Arrays;

@WebServlet(name = "AreaCheckServlet", value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    private static final Double[] X_VALUE = {-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0};
    private static final Double X_MAX = 2.0;
    private static final Double X_MIN = -2.0;
    private static final Double Y_MAX = 3.0;
    private static final Double Y_MIN = -3.0;
    private static final Double R_MAX = 4.0;
    private static final Double R_MIN = 1.0;
    private Double x;
    private Double y;
    private Double r;
    private String execute() {
        if( x >= 0 && y >= 0) {
            if( 2 * x + y <= r) return "Hit";
        }
        if( x >= 0 && y <=0) {
            if( x <= r  && y >= -r / 2) return "Hit";
        }
        if(x <= 0 && y <= 0) {
            if(Math.sqrt(x * x + y * y) < r) return "Hit";
        }
        return "Miss";
    }

    private Boolean checkParams() {
        if(checkX() && checkY() && checkR()) return true;
        return false;
    }

    private Boolean checkX() {
        if(x.isInfinite() || x.isNaN() || x == null) return false;
//        if(this.x > X_MAX || this.x < X_MIN) return false;
        if(Arrays.asList(X_VALUE).contains(this.x)) return true;
        return false;
    }

    private Boolean checkY() {
        if(y.isInfinite() || y.isNaN() || y == null) return false;
        if(this.y > Y_MAX || this.y < Y_MIN) return false;
        return true;
    }

    private Boolean checkR() {
        if(r.isInfinite() || r.isNaN() || r == null) return false;
        if(this.r > R_MAX || this.r < R_MIN) return false;
        return true;
    }
    private boolean convertParams(String x, String y, String r) {
        try {
            this.x = Double.parseDouble(x);
            this.y = Double.parseDouble(y);
            this.r = Double.parseDouble(r);
        } catch(NullPointerException | NumberFormatException e) {
            return false;
        }
        return true;
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String xString = request.getParameter("x");
        String yString = request.getParameter("y");
        String rString = request.getParameter("r");
        if(convertParams(xString, yString, rString) && checkParams()) {
            String result = execute();
            componentStorage storage = (componentStorage) request.getSession().getAttribute("storage");
            if(storage == null) storage = new componentStorage();
            storage.addComponent(new component(xString, yString, rString, result));
            request.getSession().setAttribute("storage", storage);
        }
        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
