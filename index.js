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
    var xml = '<div class="col-6 px-1">' +
        '<div class="card">' +
        '<a href="./detail.html?code='+ options.code +'">' +
        '<img class="card-img-top" src="https://dummyimage.com/300x200/000/fff" alt="Card image cap" ></img>' +
        '</a>' +
        '<div class="card-body p-1">' +
        '<a href="./detail.html?code='+ options.code +'">' +
        '<h5 class="text-dark card-title font-weight-bold">'+ options.name +'</h5></a>' +
        (( 'priceBeforeDiscount' in options ) ? '<p class="price harga_ori">Rp. ' + options.priceBeforeDiscount +'</p>' : '<p class="price harga_ori">&nbsp;</p>') +
        '<p class="price harga">Rp. '+ options.price +'</p>' +
        '<div class="text-center mt-2 btn-success rounded">' +
        '<p class="m-0">Beli</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    return xml;
};
$(document).ready(function() {
	var xml = data.product.map(function( obj ){
		return fun_xml_data_preview(obj);
	}).join('');
	$('#data-beranda-preview-row').html(xml);
});
console.log('oke');