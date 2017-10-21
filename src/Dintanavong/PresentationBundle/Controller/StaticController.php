<?php
/**
 * Created by PhpStorm.
 * User: DINTANAVONG
 * Date: 19/09/2017
 * Time: 13:54
 */

namespace Dintanavong\PresentationBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class StaticController extends Controller
{
    public function indexAction()
    {
        // Array des @ip locales
        $whitelist = array(
            '127.0.0.1',
            '::1'
        );
        $url = "http://localhost/Dintanavong/web/app_dev.php/projets";
        if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
            // Si pas local, on met l'@ du site
            //$url = "http://wolpertinger-rebirth.com";
        }
        $contact = $this->get('templating')->render('DintanavongPresentationBundle::deepsense.html.twig', array(
            'url' => $url,
        ));
        return new Response($contact);
    }
}