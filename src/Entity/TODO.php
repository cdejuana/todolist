<?php

namespace App\Entity;

use App\Repository\TODORepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TODORepository::class)
 */
class TODO
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $nombre;

    /**
     * @ORM\Column(type="date")
     */
    private $fecha_creacion;

    /**
     * @ORM\Column(type="date")
     */
    private $fecha_tope;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $estado;

    /**
     * TODO constructor.
     * @param $nombre
     * @param $fecha_tope
     * @param $estado
     */
    public function __construct($nombre, $fecha_tope, $estado)
    {
        $this->nombre = $nombre;
        $this->fecha_creacion = new \DateTime();
        $this->fecha_tope = $fecha_tope;
        $this->estado = $estado;
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getFechaCreacion(): ?\DateTimeInterface
    {
        return $this->fecha_creacion;
    }

    public function setFechaCreacion(\DateTimeInterface $fecha_creacion): self
    {
        $this->fecha_creacion = $fecha_creacion;

        return $this;
    }

    public function getFechaTope(): ?\DateTimeInterface
    {
        return $this->fecha_tope;
    }

    public function setFechaTope(\DateTimeInterface $fecha_tope): self
    {
        $this->fecha_tope = $fecha_tope;

        return $this;
    }

    public function getEstado(): ?string
    {
        return $this->estado;
    }

    public function setEstado(string $estado): self
    {
        $this->estado = $estado;

        return $this;
    }
}
