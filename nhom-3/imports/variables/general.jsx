// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

let media = "https://s3-us-west-2.amazonaws.com/cnpmnhom3/media/";

let question = [
    {
        "_id": "1",
        'type': 'choice',
        "word": "angry",
        "answer": "3",
        "question": "Chọn từ cho 'Giận giữ'",
        "answer1": "agree",
        "answer2": "attack",
        "answer3": "angry"
    },
    {
        "_id": "1",
        'type': 'choice',
        "word": "angry",
        "answer": "3",
        "question": "Chọn từ cho 'Giận giữ'",
        "answer1": "agree",
        "answer2": "attack",
        "answer3": "angry"
    },
    {
        "_id": "1",
        'type': 'choice',
        "word": "angry",
        "answer": "3",
        "question": "Chọn từ cho 'Giận giữ'",
        "answer1": "agree",
        "answer2": "attack",
        "answer3": "angry"
    },
    {
        "_id": "2",
        'type': 'choice',
        "word": "cruel",
        "answer": "3",
        "question": "Chọn từ cho 'Độc ác'",
        "answer1": "clever",
        "answer2": "create",
        "answer3": "cruel"
    },

];

topic = [
    {
        'image':'https://image.shutterstock.com/image-vector/group-working-people-diversity-diverse-260nw-589527299.jpg',
        'topic':'Cơ bản 1',
        'description':'1 số đại từ nhân xưng',
        'numOfWords':'8',
        'disabled':'0'
    },
    {
        'image': 'https://thumbs.dreamstime.com/b/summer-print-stylized-fruits-collection-flat-material-design-fruit-icon-set-feeling-spatial-hexagon-cut-half-papaya-70122269.jpg',
        'topic': 'Cơ bản 2',
        'description': '1 số loại hoa quả',
        'numOfWords': '10',
        'disabled': '1'
    }
]
module.exports = {
    media,
    question,
    topic
};

