window.onload = function () {
    document.getElementById('button').addEventListener('click', function () {

        let val = document.getElementById('myvalue').value;
        if (!val.trim()) return;

        window.location.href =
            'https://rrrorg9iri.execute-api.eu-west-1.amazonaws.com/default/aya-function?name='
            + encodeURIComponent(val);

    }, false);
};

