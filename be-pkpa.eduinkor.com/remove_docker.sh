#!/bin/bash
# declare an array called array and define 3 vales
#sudo docker images | grep "<none>" | tail -n +1 | awk '{print $3}'
#docker ps -a | tail -n +1 | awk '{print $1}'
IFS=$'\n' array=(
$(docker ps -a | tail -n +1 | awk '{print $1}')
)
for i in "${array[@]}"
do
        echo $i
    docker rm $i
    echo "success remove"
done
