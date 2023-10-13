// document.addEventListener('DOMContentLoaded', function () {

// 	document.querySelector('#btn-one').addEventListener('click', function () {
// 		html2canvas(document.querySelector('#content')).then((canvas) => {
// 			let base64image = canvas.toDataURL('image/png');
// 			// console.log(base64image);
// 			let pdf = new jsPDF('p', 'px', [1600, 1131]);
// 			pdf.addImage(base64image, 'PNG', 15, 15, 1110, 360);
// 			pdf.save('webtylepress-two.pdf');
// 		});
// 	});
	
// });




  // document.addEventListener("DOMContentLoaded", function () {
  //   document.querySelector("#btn-one").addEventListener("click", function () {
  //     html2canvas(document.querySelector("#content")).then((canvas) => {
  //       let base64image = canvas.toDataURL("image/png");

  //       // Calculate PDF size based on content dimensions
  //       let contentWidth = canvas.width;
  //       let contentHeight = canvas.height;
  //       let pdf = new jsPDF("p", "mm", [contentWidth, contentHeight]);
  //       pdf.addImage(base64image, "PNG", 0, 0, contentWidth, contentHeight);
  //       pdf.save("webtylepress-two.pdf");
  //     });
  //   });
  // });


  //  document.addEventListener("DOMContentLoaded", function () {
  //    document.querySelector("#btn-one").addEventListener("click", function () {
  //      html2canvas(document.querySelector("#content")).then((canvas) => {
  //        let base64image = canvas.toDataURL("image/png");

  //        // Calculate PDF size based on content dimensions
  //        let contentWidth = canvas.width * 0.75; // Scale to 75% of the original width
  //        let contentHeight = canvas.height * 0.75; // Scale to 75% of the original height
  //        let pdf = new jsPDF("p", "mm", [contentWidth, contentHeight]);
  //        pdf.addImage(base64image, "PNG", 0, 0, contentWidth, contentHeight);
  //        pdf.save("webtylepress-two.pdf");
  //      });
  //    });
  //  });

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn-one").addEventListener("click", function () {
   

    html2canvas(document.querySelector("#content")).then((canvas) => {
      let base64image = canvas.toDataURL("image/png");
      let contentWidth = canvas.width * 0.75; 
      let contentHeight = canvas.height * 0.75;
      let pdf = new jsPDF("p", "mm", [contentWidth, contentHeight]);
      pdf.addImage(base64image, "PNG", 0, 0, contentWidth, contentHeight);
      pdf.save("webtylepress-two.pdf");
    });
  });
});
