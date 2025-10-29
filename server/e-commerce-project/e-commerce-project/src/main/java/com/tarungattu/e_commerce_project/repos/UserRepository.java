package com.tarungattu.e_commerce_project.repos;

import com.tarungattu.e_commerce_project.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUsername(String username);
}
