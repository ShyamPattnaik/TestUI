$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});
$(document).ready(function () {
    $('#logstbl').DataTable({
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": false,
        "bInfo": false,
        "bAutoWidth": false });
    $('.dataTables_length').addClass('bs-select');

    // $('#InpSearch').on( 'keyup click', function () {
    //     filterGlobal();
    // } );
 
    // $('#InpSearch').on( 'keyup click', function () {
    //     filterColumn( $(this).parents('tr').attr('data-column') );
    // } );
    
    });

    

    // $('.inpDate').datepicker({
    //     format: 'DD/MMM/YYYY'
    // });

    // function filterGlobal () {
    //     $('#logstbl').DataTable().search(
    //         $('#InpSearch').val(),
    //         true,
    //         true
    //     ).draw();
    // }
     
    // function filterColumn ( i ) {
    //     $('#logstbl').DataTable().column( i ).search(
    //         $('#col'+i+'_filter').val(),
    //         true,
    //        true
    //     ).draw();
    // }
     
 