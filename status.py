
import datetime as dt
import os
import sys
try:
    import requests
except ModuleNotFoundError:
    os.system(f"pip{sys.version_info[0]}.{sys.version_info[1]} install requests")
    try:
        import requests
    except ModuleNotFoundError:
        os.system("cls")
        os.system("color 0c")
        input("Fatal error: Requests module could not be installed or could not "
              "be found. Please ensure you are running a version of python 3 that "
              "is compatible with the requests library.")
import time
import platform

def clear():
    if platform.system() == "Windows":
        os.system("cls")
    else:
        os.system("clear")

def main():

    
    os.system("color 0a")
    os.system("cls")
    
    while True:

        print("### WEATHERBEE SITE - CHECK ###")
        print("")

        try:
            os.system("color 0a")
            for url in ["https://weatherbee.co.uk/","https://jbrunton4.github.io/weatherbee/"]:
                print(f"Status of {url.center(50, ' ')} as at {dt.datetime.now()}")
                r = requests.get(url)
                print(f"Status code: {r.status_code}".center(50, " "))
                print(f"Reason: {r.reason}".center(50, " "))
                print("")
        except Exception as e:
            os.system("color 0c")
            print(f"Unexpected error: {e}")
            
        
        time.sleep(10)
        clear()


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        os.system("color 0f")
        os.system("cls")
