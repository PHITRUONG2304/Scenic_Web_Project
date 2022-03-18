<?
    include '../Model/include.php';

    if(isset($_POST['action']))
    {
        $action_type = $_POST['action'];
        switch ($action_type)
        {           
            case 'setContent':
                if(isset($_POST['code']))
                {
                    if(isset($_POST['content']))
                    {
                        $content = new Content();
                        echo $content->set($_POST['code'], $_POST['content']);    
                    }
                    else echo "No Content";
                }
                else echo "No Code";
                break;

            case 'setPicture':
                if(isset($_POST['code']))
                {
                    if(isset($_POST['picture']))
                    {
                        $content = new Picture();
                        echo $content->set($_POST['code'], $_POST['picture']);    
                    }
                    else echo "No Picture";
                }
                else echo "No Code";
                break;

            case 'setComment':
                if(isset($_POST['code']))
                {
                    if(isset($_POST['comment']))
                    {
                        $content = new Interact();
                        echo $content->set_cmt($_POST['code'], $_POST['comment']);    
                    }
                    else echo "No Comment";
                }
                else echo "No Code";
                break;

            case 'setLike':
                if(isset($_POST['code']))
                {
                    $content = new Interact();
                    echo $content->set_like($_POST['code']);    
                }
                else echo "No Code";
                break;

            default:
                break;
        }
    }
    echo "No Action";
?>