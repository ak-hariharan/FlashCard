package com.example.FlashCard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FlashCard.model.Flashcard;
import com.example.FlashCard.repository.FlashcardRepository;

@Service
public class FlashcardService {
    @Autowired
    private FlashcardRepository repository;

    public Flashcard save(Flashcard flashcard) { return repository.save(flashcard); }

    public List<Flashcard> findAll() { return repository.findAll(); }

    public Flashcard update(Long id, Flashcard flashcard) {
        flashcard.setId(id);
        return repository.save(flashcard);
    }

    public void delete(Long id) { repository.deleteById(id); }
}
