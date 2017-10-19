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
        $contact = $this->get('templating')->render('DintanavongPresentationBundle::deepsense.html.twig');
        return new Response($contact);
    }
}