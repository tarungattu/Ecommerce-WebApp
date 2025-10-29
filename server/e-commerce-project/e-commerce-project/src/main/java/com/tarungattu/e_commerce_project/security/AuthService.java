package com.tarungattu.e_commerce_project.security;

import com.tarungattu.e_commerce_project.dto.LoginRequestDto;
import com.tarungattu.e_commerce_project.dto.LoginResponseDto;
import com.tarungattu.e_commerce_project.dto.RegisterResponseDto;
import com.tarungattu.e_commerce_project.models.User;
import com.tarungattu.e_commerce_project.repos.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final AuthUtil authUtil;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public LoginResponseDto login(LoginRequestDto loginRequestDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequestDto.getUsername(),
                        loginRequestDto.getPassword())
        );

        User user = (User) authentication.getPrincipal();

        String token = authUtil.generateAccessToken(user);

        return new LoginResponseDto(token, user.getId());

    }

    public RegisterResponseDto register(LoginRequestDto registerRequestDto) {
        User user = userRepository.findByUsername(registerRequestDto.getUsername());

        if(user != null) throw new IllegalArgumentException("User already registered");

        user = userRepository.save(User.builder()
                        .username(registerRequestDto.getUsername())
                        .password(passwordEncoder.encode(registerRequestDto.getPassword()))
                        .build()
        );
        return new RegisterResponseDto(user.getId(), user.getUsername());
    }
}
