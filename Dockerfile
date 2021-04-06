FROM centos:centos7
MAINTAINER The CentOS Project <cloud-ops@centos.org>

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nginx; yum clean all
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
#RUN echo "nginx on CentOS 7 inside Docker" > /usr/share/nginx/html/index.html
COPY ./conf.d /etc/nginx/conf.d
COPY ./project /home/project
EXPOSE 80
CMD [ "/usr/sbin/nginx" ]