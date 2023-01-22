import subprocess
import json

import os
if os.path.exists('c:/Users/ENGJOE/neobash-site/js/category-card.mjs'):
    print('The file exists')
else:
    print('The file does not exist')

def parseJava():
    process = subprocess.Popen(['node', 'c:/Users/ENGJOE/neobash-site/js/category-card.mjs'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    java_obj_string = stdout.decode('utf-8')
    print(stdout)
    print(stderr)
    java_obj_as_dictionary = json.loads(java_obj_string)
    return java_obj_as_dictionary

""" def parseJava():
    with open("./js/category-card.js", "r") as f:
        js_code = f.read()
    js_obj = eval_js6(js_code)
    return js_obj
 """
js_obj = parseJava()
print(js_obj)
