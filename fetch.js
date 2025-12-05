window.onload = function () {
    document.getElementById('button').addEventListener('click', function () {

        let val = document.getElementById('myvalue').value;
        if (!val.trim()) return;

        window.location.href =
            'https://pr85y280l1.execute-api.eu-west-1.amazonaws.com/default/aya-function-sns2'
            + encodeURIComponent(val);

    }, false);
};

