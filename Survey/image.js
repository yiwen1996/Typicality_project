function assign(arr, vars) {
    var x = {};
    var num = Math.min(arr.length, vars.length);
    for (var i = 0; i < num; ++i) {
        x[vars[i]] = arr[i];
    }
    return x;
}

function load_img(imgId, image, images, index) {
    image.onerror = function() {
        load_img(imgId, this, images, index+1);
    };
    image.onload  = function() {
        var element = document.getElementById(imgId);
        if (element) {
            element.src = this.src;
            element.style.display = 'block';
        }
    };
    image.src = images[index];
}

var arr = [['https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bBBbNwwLYOEKAK2',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6rk5UtX1IPYCT1Y',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_38nIufPLS4jRrDw',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ezI2h0NgF4dTzvw',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bfpZzTUcixC2gcK',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6g9FEiNxU84Wdsq',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5gnorNXtOu2irnU',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_7OFcPUQrREFY7uS',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_79hLMhbQGX7CzJQ',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6RJxMRNE76ermzI',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3dZlk3SjjOWbcHA',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_a3ocxhjaTy0iO9w',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_dmWlmziUI4TxWC2',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6FmsS88cCJWEQZM',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_e2nnqgOYDzB8rK6',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_dbg7VtuaAdH6d82'],
 ['https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2tsdDcUjMxYNNQi',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0kOj6gfoIANk4NE',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ekTiNocRYop7bcq',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3m9ZeSYfyAbNqJg',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_e4gmkOl8Bhqjzym',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0P0iMQ5iflc69ls',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6hrOWynEcnyEOSG',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0PyMS6W69igWYJ0',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9KBiJdQ5Yjb5OU6',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0TKaaYI2PnpPBHM',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_esK9hwdF8DL8wtM',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6QCzRmle1ecf6Oa',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4U8wXXRNI6unvM2',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bmtJX1ibcz1aE2a',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_b1Vnl6ynk9GHJf8',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_39otDaWdVPYIXhY'],
 ['https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bwoNqkAyDD4tiv4',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8xhDlmtyS5L1dFs',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_etDXdOzwffPyUpo',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3rYwji49Osx1WeO',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eh2YDDtBGFgEMUm',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ePBBmpiFlYJik98',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_cTHdfUio39VLHUi',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0dnVTyXJGDNt8zA',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2i6c6NKo9M3Tuo6',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_dmoFPHzGr5zfWhE',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0eUd83RtrkZbwX4',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1M7y5NzyYEVMVxk',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_cNgIltaHEbm3eyG',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_e5wtQvi7LBshaFo',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bHDBQE0YJ2Sc1kG',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5vHkMS4o6dfZrjo'],
 ['https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6gruJ3PK40IRYx0',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_cITRuN8BkRgjmXs',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6KXu5eqeWhmjyhU',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_73xqdRbs3p0oq7c',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0Jvmi7x6WN3xE3A',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bw4GrbXwQ0i8Uya',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1ZIJZd6OYHbvBcO',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2fcFV6FkMhwJu4u',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0ImrdekSkFGswke',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bklb5RRgLP7RYRo',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eSgwsNWSs6sYcjs',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6PannfZSjBQPRmm',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3eXgvdJIcFhP9mS',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3CtFP6IeAiuohg2',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5oM0KwoDYd3GmJ8',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_cuwyBaTkPeDhD6e'],
 ['https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bPnZ7OdUjMEDcV0',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eQDRWkNy08Bpsxg',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8uDjBnaH2kUt33E',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0qDteg44aaVO8jc',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_dcfi12jJoT98bJ4',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_00NOwQSwTmX2glg',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0fGcv7iWqWxqH3w',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0U1NSj3K1BfRrrE',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_55rhYx2hrkPzTue',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_080KEtA1ZhK9z9k',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4HpwlDorv7L39DU',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bCt4qSQvAQdq4ce',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9tPBv8qPXuvMCTI',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0NwhkxdNiic7wSG',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0HhRE0gfc0Oa4vA',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8okXG5iWrwxnNOe'],
 ['https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_7O4rqF19P9YlT82',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1TVzXJ5hcePlvSK',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6MwDlEutcjAh1Oe',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9srppaEOGRZl7oi',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ac3ouutMixL2VEO',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6QjFecDCv2Ji7d4',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_dhQZQ4CbvGFbkmG',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_a3PvYPUZ5ByRyVo',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_cCR9WmrX5UZ6NZs',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_7OIsSpeQdAxBKjc',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_37Q0qrGUWAwLqFE',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0ktqyvmH3024dU2',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_72oagQS0teQDWYe',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_af98shGzmf8SPdA',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1BWCIF2pMz71vgy',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_73TyRauxeiLZx78'],
 ['https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_dlZNEfUNS8cLlH0',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9Y6D8Z81Cpq75rw',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9twmVo5UI5DUNOm',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_e5TSNhklNO01OQK',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3z1NrkCuU1JSZgO',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4JIFQlJpLWD1IJ8',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_24OzlxkxmSY1ojk',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_aVkyNUlL5B8APQy',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3sW2N95lsXVNNcO',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6hrIaOnkLuPB5c2',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eeY46mkAKZkW1nw',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2nufRExwyLu0QUC',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8D4xvQNbbTei7C6',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9npwr7Zga2po9bE',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1Mou9E3TaTyWSMu',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eRNHtbSatJVvTF4'],
 ['https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bgyTCblDtkKqW3k',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_enGa8DtYgk6kD0G',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6DNRpMpxpZ1eBfg',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8rgDsBqv84zu76S',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_25d4IFJR4bZ4oMS',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_b2Q0Xc1NLOLkUZg',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8bQVz2lSZF29gjQ',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_b1MCBs7KRSDyz2u',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_29mNEDtSy0QcYvQ',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9vrioFnC4w6QhZY',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3qkVfFTDnY0WH9Y',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8Im3kcJNkqoZCzs',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_diCsyBP6wsSS7A2',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_aWbP2P86oK1p5e6',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8bQid040ZR2P8fs',
  'https://cmu.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3qi6hX652J0QcBw']];
var x = assign(arr, ['image_array_1','image_array_2','image_array_3','image_array_4',
                     'image_array_5','image_array_6','image_array_7','image_array_8']);