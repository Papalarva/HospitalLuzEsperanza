$(document).ready(function() {
    $("#user-type").change(function() {
        let userType = $(this).val();
        let extraFields = $("#extra-fields");

        extraFields.empty();

        if (userType === "medico") {
            extraFields.append('<input type="text" placeholder="Especialidad médica" required>');
            extraFields.append('<input type="text" placeholder="Número de licencia médica" required>');
        } else if (userType === "admin") {
            extraFields.append('<input type="text" placeholder="Código de administrador" required>');
        }
    });
});