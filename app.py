from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import traceback

app = Flask(__name__)
CORS(app)  


df = pickle.load(open('df.pkl', 'rb'))

similarity = pickle.load(open('similarity.pkl', 'rb'))

@app.route('/job_titles', methods=['GET'])
def get_job_titles():
    try:
        job_titles = df['Title'].tolist()
        return jsonify(job_titles)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

 

@app.route('/recommend', methods=['POST'])
def recommend_jobs():
    try:
        data = request.get_json()
        title = data.get('title')
        
       
        if title not in df['Title'].values:
            return jsonify({'error': f"Job title '{title}' not found in database!"}), 404
        
        
        idx = df[df['Title'] == title].index[0]
        idx = df.index.get_loc(idx)
        # Get distances based on the index location within the sampled DataFrame
        distances = sorted(list(enumerate(similarity[idx])), key=lambda x: x[1], reverse=True)
        
       
        recommended_jobs = []
        for i, distance in distances:
            if i != idx:  
                recommended_jobs.append(df.iloc[i]['Title'])
                if len(recommended_jobs) >= 20:
                    break  

        return recommended_jobs

    
    except Exception as e:
        traceback.print_exc()  
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
