package com.example.helo.servlet;

import com.example.helo.bean.componentStorage;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "ClearTableServlet", value = "/ClearTableServlet")
public class ClearTableServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        componentStorage storage = (componentStorage)request.getSession().getAttribute("storage");
        if(storage == null) storage = new componentStorage();
        storage.getStorage().clear();
        request.getSession().setAttribute("storage", storage);

        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }
}
