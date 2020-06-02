var data = {
    'product': [{
        'name': 'Kangkung China',
        'code': '5123',
        'producerCode': '51',
        'price': 50000,
        'priceBeforeDiscount': 51200,
        'imageCode': '23',
        'description': 'Kangkung China berasal dari Wuhan'
    }, {
        'name': 'Kangkung Jepang',
        'code': '5124',
        'producerCode': '51',
        'price': 50000,
        'imageCode': '23',
        'description': 'Kangkung China berasal dari Wuhan'
    }, {
        'name': 'Kangkung Germany',
        'code': '5125',
        'producerCode': '51',
        'price': 50000,
        'priceBeforeDiscount': 51200,
        'imageCode': '23',
        'description': 'Kangkung China berasal dari Wuhan'
    }]
};

var fun_xml_data_preview = function( options ) {
    var xml = '<div class="detail-img">' +
        '    <img class="card-img-top" src="https://dummyimage.com/300x200/000/fff" alt="Card image cap">' +
        '</div>' +
        '<div class="detail-desc px-4">' +
        '    <div>' +
        '        <h5 class="">' + options.name +  '</h5>' +
        '    </div>' +
        '    <p class="text-justify">' + options.description +  '</p>' +
        '</div>' +
        '<div class="detail-price px-2">' +
        '    <div class="row mx-0">' +
        '        <div class="col">' +
        '            <p class="price harga_ori">Rp. ' + options.priceBeforeDiscount +  '</p>' +
        '            <div>' +
        '                <p class="price harga">' +
        '                    <span id="harga">Rp. ' + options.price +  '</span>' +
        '                    <span id="unit">/100mg</span>' +
        '                </p>' +
        '            </div>' +
        '        </div>' +
        '        <div class="col">' +
        '            <div class="text-center mt-2 btn-success rounded">' +
        '                  <p class="m-0">Beli</p>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';
    return xml;
};
$(document).ready(function() {
    var code = getQueryParam('code');
    console.log(code);
    var productSelected = data.product.filter(( obj ) => { return obj.code == code; });
    var xml = fun_xml_data_preview(productSelected[0]);
	$('#data-beranda-preview-detail').html(xml);
});
var getQueryParam = function (param, defaultValue = undefined) {
    location.search.substr(1)
        .split("&")
        .some(function(item) { // returns first occurence and stops
            return item.split("=")[0] == param && (defaultValue = item.split("=")[1], true)
        })
    return defaultValue
}
console.log('oke');