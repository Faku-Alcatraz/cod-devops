# completen lo necesario para construir el contenedor. Recuerden externalizar las variables

FROM ubuntu:20.04
#Install dependencies
RUN apt-get update && apt-get install -y gnupg2
RUN apt-get install -y wget
#Install Jenkins
RUN wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | apt-key add - \ 
&& sh -c 'echo deb https://pkg.jenkins.io/debian binary/ > \
    /etc/apt/sources.list.d/jenkins.list' \
&& apt-get update \
&& apt-get install -y jenkins
#Install Java
RUN apt-get update
RUN apt-get install -y openjdk-11-jdk
RUN java -version
RUN systemctl daemon-reload
RUN systemctl start jenkins
RUN systemctl status jenkins