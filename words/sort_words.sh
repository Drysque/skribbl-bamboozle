#!/usr/bin/bash

FILE=words/words.txt
JSFILE=src/words.js

#check source existence
test -f $FILE
if (( $? != 0 )) ; then
    stat $FILE ; exit 1
fi 

# create tmp file
TMPFILE=mktemp

# sort word by length
cat $FILE | awk '{ print length, $0 }'  | sort -n -s | cut -d" " -f2- > $TMPFILE

# put tmp in js file
mv $TMPFILE $FILE

# redirect everything to tmp
exec 1>$TMPFILE

# put js code in tmp file
echo "export function getWords() {"
echo "    return ["
while read -r line ; do
    echo "        '$line',"
done < $FILE
echo -e "    ];\n}"

# put tmp in js file
mv $TMPFILE $JSFILE
