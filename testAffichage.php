
<form method="post" enctype="multipart/form-data">
    <input type="file" name="files[]" multiple>
    <input type="submit" value="Upload">
</form>

<?php

if(isset($_FILES['file'])){
}