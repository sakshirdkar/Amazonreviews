module.exports = function mapTopicToBroker(searchTopic) {

    const brokerUrl = ["http://server:8080/products/", "http://broker2:8081/products/", "http://broker3:8082/products/"];
    const Topics = ["IPHONE", "MACBOOK", "MYSTERY BOOKS", "ROMANTIC NOVELS", "MOISTURISER", "SHAMPOO"];
    let resultUrl = '';
    let topicPerBroker = Topics.length / brokerUrl.length;
    let broker = 0;
    let i = 0;
    let flag = '';
    while (i < Topics.length && flag == '') {
        let j = 1;
        while (j <= topicPerBroker) {
            if (Topics[i] == searchTopic) {
                resultUrl = brokerUrl[broker];
                flag = 'found';
            }
            i++;
            j++;
        }
        broker++;
    }
    return resultUrl;
}

//console.log(mapTopicToBroker("ROMANTIC NOVELS"));