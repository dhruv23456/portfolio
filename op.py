import shutil
import psutil
# du = shutil.disk_usage("/")
# print(du)

# print(du.free/du.total*100)
# print(psutil.cpu_percent(0.3))

def check_disk_usage(disk):
          du = shutil.disk_usage(disk)
          free = du.free / du.total * 100
          print(free)
          return free > 20

def check_cpu_usage():
        usuage = psutil.cpu_percent(1)
        print(usuage)
        return usuage > 1

if not check_disk_usage("/") or not check_cpu_usage():
        print("Error their is something went wrong")

else:
        print("Everything is ok")