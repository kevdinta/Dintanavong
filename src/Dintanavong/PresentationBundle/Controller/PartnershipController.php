<?php
/**
 * Created by PhpStorm.
 * User: DINTANAVONG
 */

namespace Dintanavong\PresentationBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class PartnershipController extends Controller
{
    public function indexAction()
    {
        $contact = $this->get('templating')->render('DintanavongPresentationBundle::partnership.html.twig');
        return new Response($contact);
    }
}