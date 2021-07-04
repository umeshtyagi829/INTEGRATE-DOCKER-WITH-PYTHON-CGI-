#!/usr/bin/python3

import cgi
import subprocess as sp

print("content: text/html")
print()

form_value = cgi.FieldStorage()

imageName = form_value.getvalue("imageName")
conName = form_value.getvalue("conName")
data = form_value.getvalue("data")


# show running container
if ("container" in data) or ("containers" in data) and (("show" in data) or ("print" in data ) ) or ("running" in data):
    o = sp.getoutput "docker ps")
    print(o)

# show stop container
elif ("container" in data) or ("containers" in data)  and (("show" in data) or ("print" in data ) ) or ("stop" in data):
    o = sp.getoutput("docker ps -a")
    print(o)

# show all images
elif ("image" in data) or ("images"  in data) and (("show" in data) or ("print" in data ) ):
    o = sp.getoutput("docker images")
    print(o)

# create container
elif ("container" in data) and (("launch" in data) or ("execute" in data) or ("create" in data)):
    o = sp.getoutput("docker run -d --name {} {}".format(conName, imageName))
    print(o)

# download image
elif (("image" in data) or ("images" in data)) and (("download" in data) or ("pull" in data)):
    o = sp.getoutput("docker pull {} ".format(imageName))
    print(o)

# delete container
elif (("delete" in data) or ("remove" in data ) ) and (("container" in data)):
    run = "docker rm -f {} ".format(conName)
    o = sp.getoutput(run)
    print(o)

# delete image
elif (("delete" in data) or ("remove" in data ) ) and (("image" in data)):
    o = sp.getoutput("docker rmi -f {}".format(imageName))
    print(o)


