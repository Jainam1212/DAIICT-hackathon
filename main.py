import json

from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle
import numpy as np
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

@app.route('/run-code', methods=['POST'])
def run_code():
    data = request.get_json()
    print(data)
    # Your Python code here
    processed_data = data_processing_function(data)

    return jsonify({"processed_data": processed_data})

def data_processing_function(data):
    with open('preprocessor.pkl', 'rb') as preprocessor_file:
        preprocessor = pickle.load(preprocessor_file)

    # Load the model from the .pkl file
    with open('Ridge.pkl', 'rb') as file:
        model = pickle.load(file)

    values=list(data.values())
    print(values)
    array=np.array([values])

    column_names = ['mo_sc_heliodistance',
                    'mo_sc_long_heeq',
                    'mo_sc_lat_heeq',
                    'icme_duration',
                    'icme_bmax',
                    'icme_speed_mean',
                    'icme_speed_std',
                    'mo_expansion_speed',
                    'mo_density_mean',
                    'mo_temperature_mean',
                    'sheath_speed_mean',
                    'sheath_speed_std',
                    'sheath_density_mean']

    # Create a DataFrame with the input data and column names
    input_data_df = pd.DataFrame(array, columns=column_names)
    processed_data = preprocessor.transform(input_data_df)

    # Make predictions
    predictions = model.predict(processed_data)
    print(predictions)
    predictions_list = predictions.tolist();

    # Output the predictions

    processed = {"message": "Data received", "data": predictions_list}
    processed_json = json.dumps(processed)

    return processed_json

if __name__ == '__main__':
    app.run(debug=True)
