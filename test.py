### Be sure to install the latest whylogs v0 version as the platform does not yet support v1:
### pip install "whylogs<1.0"

import pandas as pd
import os
from whylogs.app import Session
from whylogs.app.writers import WhyLabsWriter

os.environ["WHYLABS_API_KEY"] = "NDs4M0yFiK.t8gM6F9n9SBrxHlY5scNeR5Tpo5Ap0ScFLuMZkFE6TST66IIcX3Kj"
os.environ["WHYLABS_DEFAULT_ORG_ID"] = "org-22Dmd9"

# Adding the WhyLabs Writer to utilize WhyLabs platform
writer = WhyLabsWriter("", formats=[])

session = Session(project="demo-project", pipeline="demo-pipeline", writers=[writer])

# Point to your local CSV if you have your own data
df = pd.read_csv("https://whylabs-public.s3.us-west-2.amazonaws.com/datasets/tour/current.csv")

# Run whylogs on current data and upload to WhyLabs.
# Note: the datasetId is the same as the modelId
# The selected model project "My Model  (model-1)" is "model-1"

with session.logger(tags={"datasetId": "model-1"}) as ylog:
    ylog.log_dataframe(df)
