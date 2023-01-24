
<?

$conn = mysqli_connect("localhost","root","root","mydb");
if (!$conn)
  echo "no connection";
else
{
  echo "<p> success!";
  $class = $_POST['class'];
  $date = $_POST['date'];
  $time = $_POST['timeslot'];

$sql="insert into usertable (class,date,time) values ('$class','$date','$timeslot')";

if(mysqli_query($conn,$sql))
    echo "<p> row inserted";
  else
    echo "<p> nothing inserted";
}



 php?>
