<?php
    include '../Model/include.php';

    if(isset($_GET['action']))
    {
        $action_type = $_GET['action'];
        switch ($action_type)
        {           
            case 'getContentForMain':
                $content = new Content();
                echo $content->get_full();
                break;

            case 'getContentForDetail':
                if(isset($_GET['code']))
                {
                   $content = new Content();
                   echo $content->get_with_code($_GET['code']); 
                }
                else echo "No Code";
                break;

            case 'getPictureForMain':
                $picture = new Picture();
                echo $picture->get_avatar();
                break;

            case 'getPictureForDetail':
                if(isset($_GET['code']))
                {
                    $picture = new Picture();
                    echo $picture->get_with_code($_GET['code']);
                }
                else echo "No Code";
                break;

            case 'getComment':
                if(isset($_GET['code']))
                {
                    $comment = new Interact();
                    echo $comment->get_cmt($_GET['code']);
                }
                else echo "No Code";
                break;

            case 'getLike':
                if(isset($_GET['code']))
                {
                    $comment = new Interact();
                    echo $comment->get_like($_GET['code']);
                }
                else echo "No Code";
                break;

            default:
                break;
        }
    }
    else echo "No Action";
?>