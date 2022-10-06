package com.example.helo.servlet;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "ControllerServlet", value = "/ControllerServlet")
public class ControllerServlet extends HttpServlet{
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        if(req.getParameter("clear") != null && req.getParameter("clear").equals("true")) {
            getServletContext().getNamedDispatcher("ClearTableServlet").forward(req, res);
        } else if(req.getParameter("x") != ""
                && req.getParameter("y")!= ""
                && req.getParameter("r") != "") {
            getServletContext().getNamedDispatcher("AreaCheckServlet").forward(req, res);
        } else {
            getServletContext().getRequestDispatcher("/index.jsp").forward(req, res);
        }
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        doGet(req, res);
    }

}
