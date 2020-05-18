package com.thaivo.restaurant.port.adapter.rest.manage;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RootResource {

    @RequestMapping("/")
    public ResponseEntity<Object> root(){
        try {
            String response = "" +
                    "<!DOCTYPE html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                    "    <title>Welcome</title>\n" +
                    "\n" +
                    "    <style>\n" +
                    "        body { \n" +
                    "            padding-top: 100px;\n" +
                    "            background: teal;\n" +
                    "            text-align: center;\n" +
                    "            font-family: 'Courier New', Courier, monospace;\n" +
                    "        } \n" +
                    "        h1 {\n" +
                    "            color: white;\n" +
                    "        }\n" +
                    "        p {\n" +
                    "            color: whitesmoke; \n" +
                    "            font-weight: bold;\n" +
                    "            font-size: 50px;\n" +
                    "            line-height: 50px;\n" +
                    "            margin: 0;\n" +
                    "        }\n" +
                    "        h3 {\n" +
                    "            color: yellowgreen; \n" +
                    "        }\n" +
                    "    </style>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "    <h1>Hello World!</h1>\n" +
                    "    <h3></h3>\n" +
                    "    <p>00:00</p>\n" +
                    "\n" +
                    "    <script>\n" +
                    "        Date.prototype.getDayname = function() {\n" +
                    "            var monthNames = [ \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\", \"Sunday\"];\n" +
                    "            return monthNames[this.getDay()];\n" +
                    "        }\n" +
                    "        Date.prototype.getMonthName = function() {\n" +
                    "            var monthNames = [ \"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \n" +
                    "                            \"July\", \"August\", \"September\", \"October\", \"November\", \"December\" ];\n" +
                    "            return monthNames[this.getMonth()];\n" +
                    "        }\n" +
                    "        \n" +
                    "        let elementDate = document.getElementsByTagName(\"h3\")[0];\n" +
                    "        let elementTime = document.getElementsByTagName(\"p\")[0]; \n" +
                    "        setInterval(() => {        \n" +
                    "            let date = new Date();\n" +
                    "\n" +
                    "            elementDate.innerHTML = `${date.getDayname()} ${date.getMonthName()} ${date.getDate()}, ${date.getFullYear()}`;\n" +
                    "\n" +
                    "            let hour = date.getHours();\n" +
                    "            let minnute = date.getMinutes();\n" +
                    "            let second = date.getSeconds();\n" +
                    "            elementTime.innerHTML = `${hour<10? '0':''}${hour}:${minnute<10? '0':''}${minnute}:${second<10? '0':''}${second}`;\n" +
                    "        }, 1);\n" +
                    "    </script>\n" +
                    "</body>\n" +
                    "</html>";
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch (Throwable throwable){
            throwable.printStackTrace();
            return new ResponseEntity<>(throwable.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
