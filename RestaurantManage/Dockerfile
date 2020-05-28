FROM openjdk:8u131-jre-alpine

EXPOSE 8080

VOLUME /tmp

WORKDIR /home/cnpm

COPY target/*.jar /home/cnpm/app.jar

ENTRYPOINT ["java","-jar","/home/cnpm/app.jar"]
