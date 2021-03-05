import argparse
import pandas as pd

parser = argparse.ArgumentParser()
parser.add_argument("source")
parser.add_argument("target")
args = parser.parse_args()

source = pd.read_csv(args.source).iloc[::-1]
x = pd.to_datetime(source['Date']).dt.strftime("%Y-%m-%d")
y = source['Open']
result = pd.DataFrame({'x': x, 'y': y})
result.to_json(args.target, orient="records")