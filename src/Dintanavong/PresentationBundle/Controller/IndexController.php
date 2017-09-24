<?php

namespace Dintanavong\PresentationBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    public function indexAction()
    {
        return $this->render('DintanavongPresentationBundle::index.html.twig');
    }
}
