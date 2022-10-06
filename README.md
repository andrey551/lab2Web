# WEB PROGRAMMING

## Laboratory No.2

### Professor: Письмак Алексей Евгеньевич
### Student: Dau Cong Tuan Anh
### Group: P32151
### Variant: 

## Task:

```
Develop a web application based on servlets and JSP, which determines whether a point on the coordinate plane falls into a given area.

The application must be implemented according to the MVC pattern and consist of the following elements:

ControllerServlet , which determines the type of request, and, depending on whether the request contains information about the 
coordinates of the point and the radius, delegating its processing to one of the components listed below. 
All requests within the application must be sent to this servlet (using the GET or POST method, depending on the job option), 
other servlets from web pages should not be directly called.
AreaCheckServlet , which checks whether a point is in an area on the coordinate plane and generates an HTML page with the results 
of the check. Should process all requests containing information about the coordinates of the point and the radius of the area.
The JSP page that renders the HTML page with the web form. Should process all requests that do not contain information about 
the coordinates of the point and the radius of the area.

```
**The developed JSP page should contain:**

"Header" containing the student's full name, group number and option number.
- A form that submits data to the server.
- A set of fields for specifying the coordinates of a point and the radius of an area in accordance with the task option.
- A JavaScript script that validates the values ​​entered by the user in form fields.
- An interactive element that contains an image of an area on the coordinate plane (according to the task option) and implements the following functionality:
- If the area radius is set, the mouse click on the image should be handled by a JavaScript function that determines the coordinates of the point that the user clicked on and sends the resulting coordinates to the server to check for a hit.
- Otherwise, after clicking on the picture, a message should be displayed about the impossibility of determining the coordinates of the point.
- After checking whether the point is in the area, the image must be updated with the results of this check (i.e., a new point must appear on it).
- Table with the results of previous checks. The list of results must be taken from the application context, HTTP session, or bean, as appropriate.

**The page returned by AreaCheckServlet must contain:**

- A table containing the received parameters.
- The result of the calculations is the fact that the point hits or misses the area.
- A link to a page with a web form for generating a new request.
- The developed web application must be deployed on the WildFly server . The server must be running in a standalone configuration, ports must be configured in accordance with the given portbase, access to the http listener must be open to all IPs.

