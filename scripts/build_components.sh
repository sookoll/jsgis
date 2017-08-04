#!/bin/bash
cd $1
rm -f "$2.js"
for fn in $(find $2/ -name '*.js')
do
  if [ -f "$fn" ];then
    base=$( basename "$fn" )

    filename="${base%.*}"
    path="${fn%.*}"
    module=`sed 's/\(.\)/\U\1/' <<< "$filename"`
    #echo "$base $filename $module $fn $path"
    echo "export {default as $module} from './$path';" >> "$2.js"
  fi
done
