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

class GalleryController extends Controller
{
    public function indexAction()
    {
        $gallery = $this->get('templating')->render('DintanavongPresentationBundle::gallery.html.twig');
        return new Response($gallery);
    }
}