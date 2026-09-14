#!/usr/bin/env python3
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os

root = Path(__file__).resolve().parents[1]
os.chdir(root)
server = ThreadingHTTPServer(("127.0.0.1", 8000), SimpleHTTPRequestHandler)
print("Portfolio: http://127.0.0.1:8000/")
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
