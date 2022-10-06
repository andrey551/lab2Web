<%@ page import="java.util.ArrayList" %>
<%@ page import="com.example.helo.bean.component" %>
<%@ page import="com.example.helo.bean.componentStorage" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page session="true" %>
<html>
<head>
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/table.css">
    <link rel="shortcut icon" href="#" />
</head>
<body>

<table id="main-table" onload="loadCanvas()">
    <tr >
        <td id="header">
            <header style="padding-bottom:50px;">
                <a class="header-info">Full name: Dau Cong Tuan Anh</a>
                <br>
                <a class="header-info">Group: P32151</a>
                <br>
                <a class="header-info">Option: 14030</a>
            </header>
        </td>
    </tr>
    <tr id ="draw">
        <td>
            <section onload="loadCanvas()">
                <h2>
                            <span class="content-section__header__text">
                                Graphic
                            </span>
                </h2>
                <canvas id ="canvas" class="graph-canvas" width="449" height="449"   >Chart Interactive Area</canvas>
            </section>
        </td>
        <td class ="vietnam">
            <img id = "imageVN" src="img/VietNam.png">
        </td>
    </tr>
    <tr>
        <td>
            <form id = "send-data-form" action="ControllerServlet" method = "GET">
                <input type="hidden" name="x" id = "x-value">
                <input type="hidden" name="y" id = "y-value">
                <input type="hidden" name="r" id = "r-value">
                <input type="hidden" id="clearToSend" name = 'clear' value = "false">
                <input type="submit" >
            </form>
        </td>
        <td>
            <a id="message"></a>
        </td>
        <td>
            <button id = "resetButton" onclick="resetOnAction()">Reset</button>

        </td>
        <td>
            <div ><a id = "clock"></a></div>
        </td>
    </tr>
    <tr>
        <td><div lang="en">X</div></td>
        <td><div lang="en">Y</div></td>
        <td><div lang="en">R</div></td>
        <td><div lang="en">Result</div></td>
    </tr>
    <tr>
        <td id="current-X">Current X selected:</td>
        <td id="current-Y">Current Y selected:</td>
        <td id="current-R">Current R selected:</td>
        <td></td>
    </tr>
    <tr>
        <td>
            <button class = "x-button"  onclick="selectXOnAction(-2)">-2</button>
            <button class = "x-button"  onclick="selectXOnAction(-1.5)">-1.5</button>
            <button class = "x-button"  onclick="selectXOnAction(-1)">-1</button>
            <button class = "x-button"  onclick="selectXOnAction(-0.5)">-0.5</button>
            <button class = "x-button"  onclick="selectXOnAction(0)">0</button>
            <button class = "x-button"  onclick="selectXOnAction(0.5)">0.5</button>
            <button class = "x-button"  onclick="selectXOnAction(1)">1</button>
            <button class = "x-button"  onclick="selectXOnAction(1.5)">1.5</button>
            <button class = "x-button"  onclick="selectXOnAction(2)">2</button>
        </td>
        <td>
            <input type="text" id="type-Y" placeholder="Type Y from -3 to 3" onchange="typeYOnAction()">

        </td>
        <td>
            <input type="text" id="type-R" placeholder="Type R from 1 to 4" onchange="typeROnAction()">
        </td>
        <td>

        </td>
    </tr>
    <% componentStorage ll = (componentStorage)session.getAttribute("storage");
        if(ll == null) {
            session.setAttribute("storage", new componentStorage());
            ll = (componentStorage) session.getAttribute("storage");
        } else {
            ArrayList<component> list = ll.getStorage(); %>
    <% for (int i = 0; i < list.size(); i += 2) {
    %>
    <tr>
        <td class = 'result-x'>
            <% out.print(list.get(i).getGetX());
            %>
        </td>
        <td class = 'result-y'>
            <% out.print(list.get(i).getGetY());
            %>
        </td>
        <td>
            <% out.print(list.get(i).getGetR());
            %>
        </td>
        <td>
            <% out.print(list.get(i).getGetRes());
            %>
        </td>
    </tr>
    <% } } %>


</table>
<br>
<script src="js/Submit.js"></script>
<script src="js/clickROnAction.js"></script>
<script src="js/selectXOnAction.js"></script>
<script src="js/typeYOnAction.js"></script>
<script src="js/clock.js"></script>


</body>
</html>
