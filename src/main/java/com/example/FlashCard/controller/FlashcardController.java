package com.example.FlashCard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FlashCard.model.Flashcard;
import com.example.FlashCard.service.FlashcardService;

@RestController
@RequestMapping("/api/flashcards")
public class FlashcardController {
    @Autowired
    private FlashcardService service;

    @PostMapping
    public Flashcard createFlashcard(@RequestBody Flashcard flashcard) {
        return service.save(flashcard);
    }

    @GetMapping
    public List<Flashcard> getAllFlashcards() {
        return service.findAll();
    }

    @PutMapping("/{id}")
    public Flashcard updateFlashcard(@PathVariable Long id, @RequestBody Flashcard flashcard) {
        return service.update(id, flashcard);
    }

    @DeleteMapping("/{id}")
    public void deleteFlashcard(@PathVariable Long id) {
        service.delete(id);
    }
}