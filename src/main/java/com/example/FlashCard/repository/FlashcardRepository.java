package com.example.FlashCard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.FlashCard.model.*;

public interface FlashcardRepository extends JpaRepository<Flashcard, Long> {

}
