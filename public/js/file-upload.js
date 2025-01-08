$(document).ready(function () {
    $('#fileUpload').change(function (event) {
        const file = event.target.files[0];

        if (file) {
            // Hide the upload section after file is selected
            $('.upload-section').hide();

            // Initialize a FileReader to read the PDF file
            const reader = new FileReader();
            reader.onload = function (e) {
                const pdfData = new Uint8Array(e.target.result);

                // Use PDF.js to render the PDF
                pdfjsLib.getDocument(pdfData).promise.then(function (pdf) {
                    // Render the first page of the PDF
                    renderPDFPage(pdf, 1, 1.1);
                });
            };

            reader.readAsArrayBuffer(file);
        }
    });
});

function renderPDFPage(pdf, pageNum, scale) {
    pdf.getPage(pageNum).then(function (page) {
        const canvas = $('<canvas></canvas>')[0];
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: scale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({
            canvasContext: context,
            viewport: viewport
        }).promise.then(function () {
            // Append the rendered canvas (PDF page) to the viewer
            $('#pdfViewer').append(canvas);
        });
    });
}