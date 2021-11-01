module.exports = function mapTopicToBroker(searchTopic) {

    const brokerUrls = ["http://server:8080/products/", "http://server:8081/products/", "http://server:8082/products/"];
    const Topics = ["IPHONE", "MACBOOK", "MYSTERY BOOKS", "ROMANTIC NOVELS", "MOISTURISER", "SHAMPOO"];
    let resultUrl = '';
    let topicPerBroker = Topics.length / brokerUrls.length;
    let broker = 0;
    let i = 0;
    let flag = '';
    while (i < Topics.length && flag == '') {
        let j = 1;
        while (j <= topicPerBroker) {
            if (Topics[i] == searchTopic) {
                resultUrl = brokerUrls[broker];
                flag = 'found';
            }
            i++;
            j++;
        }
        broker++;
    }
    return resultUrl;
}